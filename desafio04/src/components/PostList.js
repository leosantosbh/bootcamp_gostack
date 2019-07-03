import React, { Component } from "react";

import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Leonardo Santos",
          avatar: "https://www.w3schools.com/howto/img_avatar.png"
        },
        date: "02 Jul 2019 (2 horas atrás)",
        content:
          "É, acho que to precisando dormir um pouco, esse Bootcamp está do C!@$%$@ e me tira o sono sempre querendo terminar o pórximo módulo =D",
        comments: [
          {
            id: 2,
            author: {
              name: "Tales Souza",
              avatar: "https://www.w3schools.com/w3images/avatar2.png"
            },
            date: "03 Jul 2019 (há 20 minutos)",
            content: "Pai, Vai dormir... você precisa descansar!"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Sofia Souza",
          avatar: "https://www.w3schools.com/howto/img_avatar2.png"
        },
        date: "02 Jul 2019 (1 dia atrás)",
        content:
          "Estou querendo ir no cinema assistir o novo filme do Toy Story, quem anima?",
        comments: [
          {
            id: 4,
            author: {
              name: "Leonardo Santos",
              avatar: "https://www.w3schools.com/howto/img_avatar.png"
            },
            date: "03 Jul 2019 (2 horas atrás)",
            content: "No final de semana nós vamos minha filha!"
          },
          {
            id: 5,
            author: {
              name: "Tales Souza",
              avatar: "https://www.w3schools.com/w3images/avatar2.png"
            },
            date: "03 Jul 2019 (há 20 minutos)",
            content: "Pai, quero ir também... Vai ter pipoca é claro!"
          }
        ]
      },
      {
        id: 6,
        author: {
          name: "Tales Souza",
          avatar: "https://www.w3schools.com/w3images/avatar2.png"
        },
        date: "02 Jul 2019",
        content: "Hoje ainda é segunda feira... a, vem logo final de semana",
        comments: [
          {
            id: 7,
            author: {
              name: "Sofia Souza",
              avatar: "https://www.w3schools.com/howto/img_avatar2.png"
            },
            date: "02 Jul 2019 (1 dia atrás)",
            content: "Terça já... uhuuu"
          },
          {
            id: 8,
            author: {
              name: "Leonardo Santos",
              avatar: "https://www.w3schools.com/howto/img_avatar.png"
            },
            date: "03 Jul 2019 (2 horas atrás)",
            content: "Corrigindo, Quarta-Feira"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
