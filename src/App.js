import React, { useEffect, useState } from "react";
import { fetchData } from "./api/fetcher";
import styled, { ThemeProvider } from "styled-components";
import { crukTheme } from "@cruk/cruk-react-components";
import { SearchForm } from "./components/searchform";

const SiteWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

function App() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query) {
      fetchData(query).then((data) => {
        const getFirstTenResults = data.collection.items.slice(0, 10);
        setResults(getFirstTenResults);
      });
    }
  }, [query]);

  const searchQuery = (query) => {
    setQuery(query);
  };

  console.log(results);

  return (
    <ThemeProvider theme={crukTheme}>
      <SiteWrapper>
        <div>
          <h1>CRUK technical exercise - React</h1>
        </div>
        <SearchForm searchQuery={searchQuery} />
      </SiteWrapper>
    </ThemeProvider>
  );
}

export default App;
