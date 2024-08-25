import { TCategory } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";

const CategoryCard = ({
  attributes: { title_en, title_ar, description_ar, description_en },
}: TCategory) => {
  const locale = useLocale();

  return (
    <div >
      <Link href={"/"}>
      <div className="bg-red-800 px-5 py-16 rounded-lg">

      </div>
        
        <h4 >
          {locale === "ar" ? title_ar : title_en}
        </h4>
        <p >
          {locale === "ar" ? description_ar : description_en}
        </p>
      </Link>
    </div>
  );
};

export default CategoryCard;
