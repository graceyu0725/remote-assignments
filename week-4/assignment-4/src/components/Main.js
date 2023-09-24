import React, {useEffect, useState} from "react";

const initialUrl = "https://api.github.com/orgs/facebook/repos?per_page=5&page=1";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
}

function loadMore(page, setData) {
  const nextPage = page + 1;
  const nextPageUrl = `https://api.github.com/orgs/facebook/repos?per_page=5&page=${nextPage}`;
  fetchData(nextPageUrl)
    .then((newData) => {
      setData((prevData) => [...prevData, ...newData]);
    })
    .catch((error) => {
      console.error("Error fetching more data:", error);
    });
}

// show the name, visibility, description, and topics for each item in the page

function Main(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData(initialUrl)
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleLoadMore = () => {
    loadMore(page, setData);
    setPage(page + 1);
}
  return(
    <div className="container">
      <div className="content">
        {
          data.map((item) => (
            <div className="item" key={item.id}>
              <div className="itemContainer">
                <span className="name">{item.name}</span>
                <span className="visibility">{item.visibility.charAt(0).toUpperCase()+item.visibility.slice(1)}</span>
              </div>
              <div className="description">{item.description}</div>
              <ul className="topics">
              {item.topics.map(i => (<li>{i}</li>))}
              </ul>
            </div>
          ))
        }
      </div>
      <button onClick={handleLoadMore}>More</button>
    </div>
  )

}

export default Main;
