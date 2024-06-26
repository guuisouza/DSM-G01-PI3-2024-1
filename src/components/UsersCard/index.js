import React from 'react';
import styles from './UsersCard.module.css';

const UsersCard = ({ post }) => {
  return (
    <div className={styles.card}>
      {post.foto_user && <img src={`uploads/${post.foto_user}`} alt="Foto do usuário" className={styles.media} />}
      <div className={styles.content}>
        <h2>Nome: {post.nome}</h2>
        <h2>Cidade: {post.municipio}</h2>
        <h2>Estado: {post.uf}</h2>
        <h2>Influência: {Array.isArray(post.influencias) ? post.influencias.join(' - ') : post.influencias}</h2>
        <h2>Habilidade: {Array.isArray(post.habilidades) ? post.habilidades.join(' - ') : post.habilidades}</h2>
        <h2>Bio: {post.bio}</h2>
        <h2>Instagram: {post.instagram}</h2>
        <h2>Facebook: {post.facebook}</h2>
        <h2>Youtube: {post.youtube}</h2>
      </div>
    </div>
  );
};

export default UsersCard;
