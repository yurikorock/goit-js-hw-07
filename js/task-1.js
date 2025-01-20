// 1 Chapter

const searchOfCategories = document.querySelector("#categories");

const countOfCategories = searchOfCategories.querySelectorAll("li.item");

console.log(`Number of categories: ${countOfCategories.length}`);

// 2 Chapter

countOfCategories.forEach((category) => {
  const title = category.querySelector("h2").textContent;

  const count = category.querySelectorAll("li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${count}`);
});
