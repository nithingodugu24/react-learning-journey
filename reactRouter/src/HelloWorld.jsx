export default function HelloWorld(){
    return (
        <>
        <h1>Hwllo world !</h1>
        <a href="/">Login</a>
        <a
  href="/contact"
  onClick={(event) => {
    // stop the browser from changing the URL and requesting the new document
    event.preventDefault();
    // push an entry into the browser history stack and change the URL
    window.addEventListener("popstate", () => {
  // URL changed!
});

  }}
>Contact</a>

        </>
    )
}