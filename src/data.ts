import homeImage from "@/assets/images/home.jpg";
import itemImage from "@/assets/images/item.png";
import leaderOne from "@/assets/images/testimonials/1.png";
import leaderTwo from "@/assets/images/testimonials/2.png";
import leaderThree from "@/assets/images/testimonials/3.png";

const schoolData = {
  title: "Honey Gold Schools",
  themeSecondaryColor: "#ee7834",
  home: {
    header: { main: "Welcome to", span: "Debbie's Delight" },
    paragraph:
      "Hello, and welcome to Debbie's Delight, your go-to destination for mouthwatering treats that bring joy to every bite! We specialize in crafting delicious cakes, buns, meat pies, and doughnuts that are made with love and the finest ingredients.",
    image: homeImage,
  },
  about: {
    header: { main: "Why choose", span: "Us" },
    paragraph:
      "Whether you're celebrating a special occasion or simply indulging in a sweet craving, our delectable baked goods are sure to satisfy. At Debbie's Delight, we believe in the power of good food to bring people together, and we're excited to share our passion for baking with you. Thank you for choosing Debbie Chops – where every bite is a taste of happiness!",
    video: "/about.mp4",
  },
  leaders: [
    {
      img: leaderOne,
      role: "Vice Principal",
      details: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      img: leaderTwo,
      role: "Head Teacher",
      details:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    },
    {
      img: leaderThree,
      role: "Exam Officer",
      details:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
    },
    {
      img: leaderOne,
      role: "Exam Officer",
      details: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      img: leaderTwo,
      role: "Exam Officer",
      details:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    },
    {
      img: leaderThree,
      role: "Games Masters",
      details:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
    },
  ],
  updates: [
    {
      image: itemImage,
      title: "Parent techers association coming up on the 2nd of februray",
      description:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image: itemImage,
      title: "Students will be competing in maths olympiad",
      description:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image: itemImage,
      title: "School fees deadline will be on 30th of August",
      description:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image: itemImage,
      title: "School will be resuming on the 10th of september",
      description:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image: itemImage,
      title: "Parent techers association coming up on the 2nd of februray",
      description:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image: itemImage,
      title: "Students will be competing in maths olympiad",
      description:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image: itemImage,
      title: "School fees deadline will be on 30th of August",
      description:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image: itemImage,
      title: "School will be resuming on the 10th of september",
      description:
        "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    },
  ],
  schoolEmail: "contact@debbiechops.omnihale.com",
  copyright: "Debbie's Delight",
  gallery: [
    { src: "/gallery/video.mp4", caption: "My app", type: "video" },
    {
      src: "/gallery/image.jpg",
      caption: "Testing my new caption",
      type: "image",
    },
    { src: "/gallery/video.mp4", caption: "making waves", type: "video" },
    { src: "/gallery/image.jpg", caption: "yes sir", type: "image" },
  ],
  calender: "/calender.pdf",
  newsletter: "/newsletter.pdf",
};

export default schoolData;
