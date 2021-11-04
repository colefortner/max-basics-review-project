import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AdddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.age.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AdddUser;
