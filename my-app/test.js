fetch("https://gist.githubusercontent.com/Loerad/fe930d52774180da1cb9e230d6784b40/raw/22867a35fdcf082338af6f1594e85c2903da2c10/survivors.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach(survivor => {
        console.log(survivor)
    });
  });
fetch("https://gist.githubusercontent.com/Loerad/9c5e245cfe844449988e0e687e2709b7/raw/bd1862a89df292ee0f07e49c463b908fcf4328dd/items.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach(item => {
        console.log(item)
    });
  });
fetch("https://gist.githubusercontent.com/Loerad/a437b12b7ddcae8beaa11c7b136421c6/raw/c608c6decac6c37376fd2a518fc1d7e5717ff3e3/artifacts.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach(item => {
        console.log(item)
    });
  });


