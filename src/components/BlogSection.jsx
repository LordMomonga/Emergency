import React from "react";
import blockchain1 from "../icons/block.jpg";
import blockchain2 from "../icons/blockchain2.jpg";
import blockchain3 from "../icons/blockchain3.jpg";
import BlogCard from "./BlogCard";

export const BlogSection = () => {
  const blogs = [
    {
      title: "c'est quoi la technologie blockChains ?",
      description:
        "La blockchain est un registre numérique qui enregistre toutes les transactions effectuées entre les différents participants à un réseau. Les transactions sont enregistrées dans des blocs qui sont cryptés et reliés entre eux. Les nœuds du réseau vérifient la validité des transactions et les ajoutent à la blockchain.",
      imgUrl: blockchain1,
    },
    {
      title: "comment acheter de la crypto ?",
      description:
        "Pour acheter de la cryptomonnaie en toute sécurité, vous devez d'abord choisir une plateforme de trading parfaitement sécurisée.",
      imgUrl: blockchain2,
    },
    {
      title: "comment investi dans les stocks blockchain ?",
      description:
        "comment gagner de l'argent avec la blockchain ? quel blockchain investir? comment entrer dans la blokchain ? ",
      imgUrl: blockchain3,
    },
  ];
  return (
    <div className="blog-section-container">
      <div className="blog-section-header">
        <h1>
          Learn More about <span className="higlighted">Emergency Crypto</span>
        </h1>
        <button className="secondary">View More</button>
      </div>
      <div className="blogs-container">
        {blogs.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              title={blog.title}
              description={blog.description}
              imgUrl={blog.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};
