import DescriptionPrompt from "@/app/_components/home/propmt";
import Typography from "@/app/_components/ui/typography";

const SearchPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col gap-10 justify-center items-center p-3 md:min-h-dvh">
      <DescriptionPrompt />
      <div>
        <Typography element="h2" as="h2">
          الأكثر بحثا
        </Typography>
      </div>
    </div>
  );
};

export default SearchPage;
