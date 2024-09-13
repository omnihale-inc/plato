import { openDB } from "idb";

export async function initDB() {
  const db = await openDB("schoolDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("files")) {
        const store = db.createObjectStore("files", {
          keyPath: "id",
          autoIncrement: true,
        });
        store.createIndex("fileName", "fileName", { unique: true });
      }
    },
  });
  return db;
}

export async function addFiles(files: { name: string; fileObject: File }[]) {
  const db = await initDB();
  const tx = db.transaction("files", "readwrite");
  const store = tx.objectStore("files");

  for (let file of files) {
    if (file.fileObject.size > 1000 * 1024) {
      // 1MB size check
      throw new Error(`File ${file.name} exceeds 1MB.`);
    }

    const fileData = {
      fileName: file.name,
      fileBlob: file.fileObject,
    };

    await store.add(fileData);
  }

  await tx.done;
}

export async function getFileByName(fileName: string) {
  const db = await initDB();
  const index = db.transaction("files").objectStore("files").index("fileName");
  return await index.get(fileName);
}

export async function fetchAndStoreFiles(
  files: { name: string; url: string }[]
) {
  const filesToBeStored: { name: string; fileObject: File }[] = [];

  for (let file of files) {
    const response = await fetch(file.url);
    const blob = await response.blob();

    if (blob.size > 1000 * 1024) {
      throw new Error(`File ${file.name} exceeds 1MB.`);
    }

    const fileObject = new File([blob], file.url.split("/").pop() as string, {
      type: blob.type,
    });

    filesToBeStored.push({ name: file.name, fileObject });
  }

  await addFiles(filesToBeStored);
}
