type SideBioProps = {
  theme?: "light" | "dark";
};

export default function SideBio() {
  return (
    <>
      {/* <img src="" alt="" srcset="" /> */}
      <h1 className="text-2xl font-bold text-center my-5">Jatin Kukreja</h1>
      <ul>
        <li>
          <a href="">
            <img src="" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="" alt="" />
          </a>
        </li>
      </ul>
    </>
  );
}
