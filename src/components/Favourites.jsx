export default function Favourites({ favourites, removeFavourite }) {
  return (
    <aside className="favourites">
      <h3>Favourites</h3>

      {favourites.length === 0 && <p>No favourites yet</p>}

      {favourites.map((p) => (
        <div key={p.id}>
          <span>{p.location}</span>
          <button onClick={() => removeFavourite(p.id)}>❌</button>
        </div>
      ))}
    </aside>
  );
}
