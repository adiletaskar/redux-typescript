import { useEffect } from "react";
import PostContainer from "./components/PostContainer";
import { useAppDispatch } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";

function App() {
  // const { users, isLoading, error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <>
      {/* {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}
      <PostContainer />
    </>
  );
}

export default App;
