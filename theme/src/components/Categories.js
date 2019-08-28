/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import Button from "./ui-components/Button"

const Categories = ({ post }) => {
  const categories = post.categories.nodes
  return (
    <div>
      {categories.length > 0 && (
        <span>{categories.length > 1 ? "Categories: " : "Category: "}</span>
      )}
      {categories.map(cat => (
        <Button type="primary" styles={{ mr: 3 }}>
          <Link
            to={`/category/${cat.slug}`}
            key={cat.id}
            aria-label={`visit category ${cat.name} page`}
          >
            {cat.name}
          </Link>
        </Button>
      ))}
    </div>
  )
}

export default Categories
