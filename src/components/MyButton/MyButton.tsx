export default function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button className='fun-button' onClick={handleClick}>
      I'm a button
    </button>
  );
}
