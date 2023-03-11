import { useEffect, useState } from "react";

const useMaat = () => {
  // const apiLink = 'https://pure-refuge-33072.herokuapp.com';
  const apiLink = "https://gentle-beyond-85199.herokuapp.com"; // mongoose
  // const apiLink = `http://localhost:4040`;

  const [users, setUsers] = useState();
  const [expertises, setExpertises] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(`${apiLink}/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  useEffect(() => {
    fetch("./expertise.json")
      .then((res) => res.json())
      .then((data) => setExpertises(data));
  }, []);
  useEffect(() => {
    fetch("./blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  useEffect(() => {
    fetch("./team.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);

  return {
    apiLink,
    users,
    expertises,
    blogs,
    teams,
  };
};

export default useMaat;
