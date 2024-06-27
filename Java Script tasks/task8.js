<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Task-8</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <style>
      body {
        background: radial-gradient(
          circle at 82.8% 5.3%,
          rgb(255, 237, 216) 0%,
          rgb(255, 208, 253) 90%
        );
      }
      table input[type="number"],
      input[type="text"],
      input[type="password"],
      input[type="email"] {
        width: 100%;
        box-sizing: border-box;
      }
      table td p {
        text-align: right;
      }
      table textarea {
        box-sizing: border-box;
        width: 100%;
      }
      table td span {
        color: red;
      }
      table td button {
        background-color: red;
        color: white;
        border-radius: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container-md">
      <form action="https://www.ethnus.com" onsubmit="return verify()">
        <table class="table caption-top table-borderless">
          <caption style="text-align: center">
            <h2 style="color: blue">Registration form</h2>
          </caption>
          <tr>
            <td><p>First Name</p></td>
            <td><input type="text" id="fn" onkeydown="checkfn()" /></td>
            <td><span id="fnpop">POOR</span></td>
          </tr>
          <tr>
            <td><p>Last Name</p></td>
            <td><input type="text" id="ln" onkeyup="checkln()" /></td>
            <td><span id="lnpop">POOR</span></td>
          </tr>
          <tr>
            <td><p>Email</p></td>
            <td><input type="email" id="mail" onkeyup="checkmail()" /></td>
            <td><span id="mailpop">POOR</span></td>
          </tr>
          <tr>
            <td><p>Password</p></td>
            <td><input type="password" id="pass" onkeyup="checkpass()" /></td>
            <td><span id="passpop">POOR</span></td>
          </tr>
          <tr>
            <td><p>Re-enter password</p></td>
            <td>
              <input type="password" id="repass" onkeyup="checkrepass()" />
            </td>
            <td><span id="repasspop">POOR OR MISMATCH</span></td>
          </tr>
          <tr>
            <td rowspan="2" for="gender"><p>Gender</p></td>
            <td style="text-align: left">
              <input type="radio" value="Male" name="gender" checked />Male
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              <input type="radio" value="Female" name="gender" />Female
            </td>
          </tr>
          <tr>
            <td><p>Age</p></td>
            <td><input type="number" id="age" onkeyup="checkage()" /></td>
            <td><span id="agepop">POOR</span></td>
          </tr>
          <tr>
            <td><p>Phone Number</p></td>
            <td><input type="number" id="phno" onkeyup="checkphno()" /></td>
            <td><span id="phnopop">POOR</span></td>
          </tr>
          <tr>
            <td><p>Address</p></td>
            <td>
              <textarea rows="4" onkeyup="checkadd()" id="add"></textarea>
            </td>
            <td><span id="addpop">POOR</span></td>
          </tr>
          <tr>
            <td><p>State</p></td>
            <td><input type="text" id="state" onkeyup="checkstate()" /></td>
            <td><span id="statepop">POOR</span></td>
          </tr>
          <tr>
            <td><p>Country</p></td>
            <td>
              <select>
                <option>choose your country</option>
                <option value="India">India</option>
                <option value="UK">UK</option>
                <option value="USA">USA</option>
                <option value="China">China</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><p>Languages known</p></td>
            <td>
              <input type="checkbox" />English <input type="checkbox" />Kannada
              <input type="checkbox" />Hindi <input type="checkbox" />Telugu
            </td>
          </tr>
          <tr>
            <td colspan="3" style="padding-left: 14.5%">
              <input type="checkbox" checked />Hereby I declare all the given
              details are true
            </td>
          </tr>
          <tr>
            <td colspan="3" style="padding-left: 50%">
              Log in to <a href="https://ethnus.com/">Ethnus</a> website
            </td>
          </tr>
          <tr>
            <td colspan="3" style="text-align: center">
              <button type="submit">Register</button>
            </td>
          </tr>
        </table>
      </form>
    </div>

    <script src="./task_8.js"></script>
  </body>
</html>
