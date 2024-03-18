import Card from "@/components/Card";
import {
  ProjectType,
  projectsListingMock,
} from "../../../public/static_mocks/projectsListingMock";

export default function ListingProjects({
  showInMultiple = false,
  selectedCategory = "website",
}) {
  const categories = Array.from(
    new Set(projectsListingMock.flatMap((item) => item.categories)),
  );

  categories.unshift("all");

  const categoryCounts = projectsListingMock.reduce((acc, project) => {
    project.categories.forEach((category: any) => {
      acc[category] = acc[category] ? acc[category] + 1 : 1;
    });
    return acc;
  }, {});

  const categoriesWithCounts = {
    all: projectsListingMock.length,
    ...categoryCounts,
  };

  const renderProjectsByCategory = (category: string, categories: string[]) => {
    let filteredProjects: ProjectType[] = [];
    if (showInMultiple || category === "all") {
      filteredProjects = projectsListingMock.filter(
        (project) =>
          category === "all" || project.categories.includes(category),
      );
    } else {
      filteredProjects = projectsListingMock.filter(
        (project) => project.categories[0] === category,
      );
    }

    return filteredProjects.map((item, index) => (
      <Card
        key={index}
        title={item.title}
        image={item.cover.image}
        className="col-span-1"
        index={index}
        length={filteredProjects.length}
        isFirst={
          (category === categories?.[1] &&
            selectedCategory === "all" &&
            index === 0) ||
          (category === selectedCategory && index === 0)
        }
      />
    ));
  };

  return (
    <>
      {categories.map((category) => {
        return category !== "all" ? (
          <>
            <small className="col-span-full">{category}</small>
            {renderProjectsByCategory(category, categories)}
          </>
        ) : null;
      })}
    </>
  );
}
