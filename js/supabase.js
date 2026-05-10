const supabaseClient = supabase.createClient(
    "https://fpqubfyjnixllqyullwi.supabase.co",
    "sb_publishable_WWlsHrwRkQoIYJJ7iHwqBg_1prUCXVa"
);

document
    .getElementById("signup")
    .addEventListener("submit", async (e) => {

        e.preventDefault();

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;

        const { data, error } =
            await supabaseClient.auth.signUp({
                email,
                password,
            });

        if (error) {
            alert(error.message);
        } else {
            alert("Signup successful");
        }
    });
