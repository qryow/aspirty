export const ui = ({ label, type, value, register, errors }) => {
  return (
    <div
      className={`form-item ${
        label === "Отчество"
          ? "w-[100%]"
          : "w-[48%] max-[1550px]:w-[47%] max-[1250px]:w-[48%] max-[740px]:w-full"
      }`}
    >
      <input
        {...(register
          ? register(label, {
              required: `Поле ${label} обязательно`,
              minLength: {
                value: 2,
                message: "Минимум 5 символов",
              },
            })
          : {})}
        defaultValue={value}
        type={!register ? "text" : type}
        className={
          !register
            ? "border-[--primary-border]"
            : errors?.[label]
            ? "border-[--error]"
            : "border-[--primary-border]"
        }
      />
      <label
        htmlFor={label}
        className={
          errors?.[label] ? "text-[--error]" : "text-[--secondary-text]"
        }
      >
        {label}
      </label>
      {errors?.[label] && (
        <p className="error__text">{errors[label].message || "Error"}</p>
      )}
    </div>
  );
};
