import React, { useEffect, useState } from "react";
import { fetchData } from "./api/fetcher";
import styled, { ThemeProvider } from "styled-components";
import { crukTheme } from "@cruk/cruk-react-components";
import { SearchForm } from "./components/searchform";
import { DisplayMedia } from "./components/displaymedia";
import { ErrorMessage } from "formik";
import { IsLoading } from "./components/isloading";

const SiteWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

function App() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      if (query) {
        fetchData(query).then((data) => {
          const getFirstTenResults = data.collection.items.slice(0, 10);
          setResults(getFirstTenResults);
          setLoading(false);
        });
      }
    } catch (error) {
      setError(true);
    }
  }, [query]);

  const searchQuery = (query) => {
    setQuery(query);
  };

  if (error) return <ErrorMessage />;
  
  return (
    <ThemeProvider theme={crukTheme}>
      <SiteWrapper>
        <div>
          <h1>CRUK technical exercise - React</h1>
        </div>
        <SearchForm
          searchQuery={searchQuery}
          loading={loading}
          setLoading={setLoading}
        />
        {results && loading ? <IsLoading />: <DisplayMedia results={results} />}
      </SiteWrapper>
    </ThemeProvider>
  );
}

export default App;
