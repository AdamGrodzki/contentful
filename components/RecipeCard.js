import Link from "next/link";
import Image from "next/image"

export default function RecipeCard({ recipe }) {
  const { title, slug, cookingTime, thumbnail } = recipe.fields
  return (
    <div className="card">
      <div className="featured">
        <Image
          priority
          src={'https:' + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          alt={thumbnail.fields.title}
          style={{
            borderRadius: '10px'
          }}
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Takes approx {cookingTime} mins to make</p>
        </div>
        <div className="actions">
          <Link href={'/recipes/' + slug} legacyBehavior><a>Cook this</a></Link>
        </div>
      </div>

      <style jsx>{`
                  .content {
                    background: #ece0d1;
                    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                    margin: 0;
                    position: relative;
                    top: -40px;
                    left: -10px;
                  }
                  .info {
                    padding: 16px;
                  }
                  .info h4 {
                    margin: 4px 0;
                    text-transform: uppercase;
                  }
                  .info p {
                    margin: 0;
                    color: #777;
                  }
                  .actions {
                    margin-top: 20px;
                    display: flex;
                    justify-content: flex-end;
                  }
                  .actions a {
                    color: #fff;
                    background: #38220f;
                    padding: 16px 24px;
                    text-decoration: none;
            `}</style>
    </div>
  );
}