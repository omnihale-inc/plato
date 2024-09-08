"use client";

import Documents from "@/components/Documents";
import SearchInput from "@/components/SearchInput";
import MasterPage from "@/templates/MasterPage";
import { useState } from "react";

export default function page() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <MasterPage>
      <SearchInput onSearchQuery={setSearchQuery} />
      <Documents searchQuery={searchQuery} />
    </MasterPage>
  );
}
