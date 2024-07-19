export type SidenavItem = {
  title: string;
  icon: string;
  href: string;
};

export const sidenavItems: SidenavItem[] = [
  {
    title: "جميع الأسئلة",
    icon: "MessageCircleQuestion",
    href: "all-questions",
  },
  {
    title: "أسئلتي",
    icon: "NotebookPen",
    href: "my-questions",
  },
  {
    title: "تاغات",
    icon: "Tag",
    href: "tags",
  },
  {
    title: "مجتمعات",
    icon: "Users",
    href: "communities",
  },
];
