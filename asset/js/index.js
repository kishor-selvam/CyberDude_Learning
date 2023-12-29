import JustValidate from "just-validate";

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
  );
