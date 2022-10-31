import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOneInventory } from "../../api/inventory/inventoryServices";
import { getOneMenu } from "../../api/menu/menuServices";
import { getOneCustomer } from "../../api/user/userServices";
import ErrorPopup from "../errors/ErrorPopup";

const Form = ({ formInfo, title, func, path, id }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [formValues, setFormValues] = useState({});
  const [error, setError] = useState({});
  const [errorState, setErrorState] = useState(false);
  const handleForm = async (e) => {
    e.preventDefault();
    const response = await func(formData, id);
    if (!response.success) {
      setError({
        "statusCode" : response.status,
        "message" : response.message
      })
      setErrorState(true)
    } else navigate(path)
  };

  useEffect(() => {
    if (title === "EDIT INVENTORY") {
      getOneInventory(id).then((item) => {
        setFormValues(item.data);
      });
    }
    if (title === "EDIT MENU") {
      getOneMenu(id).then((res) => {
        setFormValues(res.data);
      });
    }
    if (title === "EDIT CUSTOMER") {
      getOneCustomer(id).then((res) => {
        setFormValues(res.data);
      })
    }
  }, []);

  return (
    <div className="flex item-center justify-center relative">
      {errorState ? (
        <div className="absolute">
          <ErrorPopup error={error} setErrorState={setErrorState} />
        </div>
      ) : null}

      <div className="flex flex-col justify-center items-center shadow-xl w-full p-4 mt-10">
        <h1 className="text-xl font-bold gettext-[#999]">{title}</h1>
        <div>
          <form onSubmit={handleForm}>
            <div className="mt-6 flex">
              <div className="flex flex-col">
                {formInfo.map((item) => (
                  <span className="mt-2 mr-4 text-md font-bold text-[#999]">
                    {item.key}
                  </span>
                ))}
              </div>
              <div className="flex flex-col">
                {formInfo.map((item) => (
                  <>
                    {item.type === "select" ? (
                      <select
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [item.name]: e.target.value,
                          })
                        }
                        className="mt-2 border-none outline-none rounded-sm bg-slate-300 pl-2 pr-2"
                        value={formValues?.[item.name]}
                      >
                        <option disabled selected>
                          Select
                        </option>
                        {item.options.map((item) => (
                          <option className="select-[#999]" value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={item.type}
                        name={item.name}
                        placeholder={item.key}
                        className="mt-2 border-none outline-none rounded-sm bg-slate-300 pl-2 pr-2"
                        defaultValue={formValues?.[item.name]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    )}
                  </>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="bg-primary text-white border border-primary w-full  h-10 border-none rounded-sm mt-7 font-bold"
            >
              PROCEED
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
