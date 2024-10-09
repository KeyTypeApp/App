interface UserInfoProps {
    id: string;
    name: string;
    pass: string;
  }
  
  const UserInfo = ({id, name, pass}: UserInfoProps) => {
    return (
      <div className="mt-5 p-5 bg-green-100 border border-green-500 text-green-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">ログイン成功</h2>
          <p className="text-lg">
            <span className="font-bold">ID:</span> {id}
          </p>
          <p className="text-lg">
            <span className="font-bold">NAME:</span> {name}
          </p>
          <p className="text-lg">
            <span className="font-bold">PASS:</span> {pass}
          </p>
      </div>
    );
  };
  
  export default UserInfo;