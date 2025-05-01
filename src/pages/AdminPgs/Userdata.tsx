// src/components/UserList.tsx
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs} from "firebase/firestore";

interface User {
  id: string;
  firstname: string;
  email: string;
  persona : string;
  createdAt: string;
  lastname: string;
  branch: string;
  yearOfStudy: string;
  rollNo: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const userList: User[] = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as User[];
    setUsers(userList);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.firstname} - {user.email} - {user.persona} - {user.createdAt} - {user.branch} - {user.yearOfStudy} - {user.rollNo}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;