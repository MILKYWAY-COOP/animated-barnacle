const Navbar = (props: any) => {
  const { theme } = props;

  return (
    <div>
      <div>
        <h1>TnC</h1>
      </div>
      <div>
        <select>
          <option value='1'>Any Where</option>
          <option value='2'>Mwangaza</option>
          <option value='3'>Area 4</option>
          <option value='4'>VM</option>
          <option value='5'>Catholic</option>
        </select>
        <select>
          <option value='1'>Any Price</option>
          <option value='2'> Below 3000</option>
          <option value='3'>3000 - 4000</option>
          <option value='4'>4000 - 5000</option>
          <option value='4'>5000 - 6000</option>
          <option value='4'>6000 - 7000</option>
          <option value='4'>Above 7000</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
