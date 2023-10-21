 const List = (props) => {
    return (
      <div className="flex justify-between items-center odd:bg-[#FFFFFF] even:bg-[#F5F7FF] py-3.5 px-4 my-1">
        <p>{props.occupation}</p>
        <p>{props.membership}</p>
      </div>
    );
  };

  export default List;