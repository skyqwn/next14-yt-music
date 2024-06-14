import { FiMusic, FiBarChart, FiSmile } from "react-icons/fi";

interface CategoryMenuProps {
  icon: React.ReactNode;
  label: string;
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ icon, label }) => {
  return (
    <div className="w-full h-[56px] p-4 px-[24px] flex gap-4 items-center bg-neutral-700 text-[20px] cursor-pointer rounded-sm hover:bg-neutral-800 transition">
      {icon}
      {label}
    </div>
  );
};

const Category = () => {
  return (
    <div className="flex flex-col gap-4 w-full lg:flex-row">
      <CategoryMenu label={"최신음악"} icon={<FiMusic color="#AAAAA" />} />
      <CategoryMenu label={"차트"} icon={<FiBarChart color="#AAAAA" />} />
      <CategoryMenu
        label={"분위기 및 장르"}
        icon={<FiSmile color="#AAAAA" />}
      />
    </div>
  );
};

export default Category;
