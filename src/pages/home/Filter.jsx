import { useDispatch, useSelector } from "react-redux";
import { SET_FILTER_AUTHOR, SET_FILTER_GENRE, SET_FILTER_SAGA, SET_FILTER_TEXT } from "../../redux/actions";
import styles from "./Filter.module.scss";

function Filter() {
  const dispatch = useDispatch();
  const authors = useSelector(state => state.authors);
  const genres = useSelector(state => state.genres);
  const sagas = useSelector(state => state.sagas);
  const selectedAuthor = useSelector(state => state.selectedAuthor);
  const selectedGenre = useSelector(state => state.selectedGenre);
  const selectedSaga = useSelector(state => state.selectedSaga);
  const filterText = useSelector(state => state.filterText);

  let authorOptions = [];
  let genreOptions = [];
  let sagaOptions = [];

  const setFilterText = e => {
    dispatch({ type: SET_FILTER_TEXT, payload: e.target.value });
  };

  const selectAuthor = e => {
    dispatch({ type: SET_FILTER_AUTHOR, payload: e.target.value });
  }

  const selectGenre = e => {
    dispatch({ type: SET_FILTER_GENRE, payload: e.target.value });
  }

  const selectSaga = e => {
    dispatch({ type: SET_FILTER_SAGA, payload: e.target.value });
  }

  if(authors && authors.length) {
    authorOptions = authors.map((author, index) => <option key={index} value={author}>{author}</option>)
  }

  if(genres && genres.length) {
    genreOptions = genres.map((genre, index) => <option key={index} value={genre}>{genre}</option>)
  }

  if(sagas && sagas.length) {
    sagaOptions = sagas.map((saga, index) => <option key={index} value={saga}>{saga}</option>)
  }

  return <>
    <form className={styles.filter}>
      <div className={styles.inputGroup}>
        <label htmlFor="selectedAuthor">Autor</label>
        <select id="selectedAuthor" onChange={e => selectAuthor(e)} value={selectedAuthor}>
          <option value="">Todos</option>
          {authorOptions}
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="selectedGenre">Género</label>
        <select id="selectedGenre" onChange={e => selectGenre(e)} value={selectedGenre}>
          <option value="">Todos</option>
          {genreOptions}
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="selectedSaga">Saga</label>
        <select id="selectedSaga" onChange={e => selectSaga(e)} value={selectedSaga}>
          <option value="">Todas</option>
          {sagaOptions}
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="filterText">Título</label>
        <input id="filterText" type="text" value={filterText} onChange={e => setFilterText(e)}/>
      </div>
    </form>
  </>;
}

export default Filter;
