import JustValidate from "just-validate";

const localStorageKey = "courierData";

const formEl = document.getElementById("formOne");

const validate = new JustValidate(formEl);

validate
  .addField(
    "#name",
    [
      {
        rule: "required",
      },
    ],
    {
      errorLabelCssClass: ["form-error"],
    }
  )
  .addField(
    "#phone-number",
    [
      {
        rule: "required",
      },
    ],
    {
      errorLabelCssClass: ["form-error"],
    }
  )
  .addField(
    "#pickup-date",
    [
      {
        rule: "required",
      },
    ],
    {
      errorLabelCssClass: ["form-error"],
    }
  )
  .addField(
    "#address",
    [
      {
        rule: "required",
      },
    ],
    {
      errorLabelCssClass: ["form-error"],
    }
  )
  .onSuccess(() => {
    const formData = new FormData(formEl);

    const formDataObj = Object.fromEntries(formData.entries());
    const newCourierData = [];

    const existingCourierData = localStorage.getItem("localStorageKey");
    const existingCourierDataArray = JSON.parse(existingCourierData);
    if (existingCourierDataArray) {
      // console.log(existingCourierDataArray);
      existingCourierDataArray.push(formDataObj);
      localStorage.setItem(
        "localStorageKey",
        JSON.stringify(existingCourierDataArray)
      );
    } else {
      newCourierData.push(formDataObj);
      localStorage.setItem("localStorageKey", JSON.stringify(newCourierData));
    }
    alert("Data added successfully");
    formEl.reset();
  });

const getAllCourierData = () => {
  const courierAllData = localStorage.getItem("localStorageKey");
  if (courierAllData) {
    const FinalData = JSON.parse(courierAllData);
    return FinalData;
  }
  return alert("No data found!");
};
console.log(getAllCourierData());

const courierTable = document.querySelector("#courierTable > tbody");

const getAllCourierDatas = getAllCourierData();

for (const item of getAllCourierDatas) {
  const dataTemplate = `<tr><td class="border px-5 py-1">${item.name}</td>
            <td class="border px-5 py-1">${item["pickup-date"].slice(0, 10)}</td>
            <td class="border px-5 py-1">${item.address}</td>
            <td class="border px-5 py-1">
              <button class="px-2 py-1 bg-red-500 hover:bg-red-600 rounded text-white text-sm">
              Delete
              </button>
            </td>
          </tr>`;
  courierTable.innerHTML += dataTemplate;
}

