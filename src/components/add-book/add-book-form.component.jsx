import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { Controller, Form, useForm } from "react-hook-form";
import { AddBookContainer, ButtonsContainer } from "./add-book-form.styles";
import apiInstance from "../../api/apiInstance";

const defaultFormFields = {
  title: "",
  author: "",
  description: "",
  genre: "",
  price: "",
  stock: "",
};

/// add book form validation needed

const AddBookForm = () => {
  const notify = () => toast("Book Added Successfully");
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultFormFields,
  });

  const onSubmit = async (data) => {
    // console.log(data);
    const res = await apiInstance.post("/books", data);
    // console.log(res);
    notify();
    reset();
  };

  return (
    <AddBookContainer>
      <h2>Add a New Book</h2>
      <span>Add a new book to the database</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="title"
          control={control}
          rules={{
            required: "Title is required",
          }}
          render={({ field }) => (
            <FormInput
              label="Book Title"
              type="text"
              required
              onChange={field.onChange}
              name="title"
              value={field.value}
            />
          )}
        />
        {errors.title && (
          <h5 style={{ color: "red" }}>{errors.title.message}</h5>
        )}

        <Controller
          name="author"
          control={control}
          rules={{
            required: "Author is required",
          }}
          render={({ field }) => (
            <FormInput
              label="Author Name"
              type="text"
              required
              onChange={field.onChange}
              name="author"
              value={field.value}
            />
          )}
        />
        {errors.author && (
          <h5 style={{ color: "red" }}>{errors.author.message}</h5>
        )}

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <FormInput
              label="Description"
              type="text"
              required
              onChange={field.onChange}
              name="description"
              value={field.value}
            />
          )}
        />
        {errors.description && (
          <h5 style={{ color: "red" }}>{errors.description.message}</h5>
        )}

        <Controller
          name="genre"
          control={control}
          render={({ field }) => (
            <FormInput
              label="Genre"
              type="text"
              required
              onChange={field.onChange}
              name="genre"
              value={field.value}
            />
          )}
        />
        {errors.genre && (
          <h5 style={{ color: "red" }}>{errors.genre.message}</h5>
        )}

        <Controller
          name="price"
          control={control}
          //need to add validation for numeric values
          render={({ field }) => (
            <FormInput
              label="Price"
              type="text"
              required
              onChange={field.onChange}
              name="price"
              value={field.value}
            />
          )}
        />
        {errors.price && (
          <h5 style={{ color: "red" }}>{errors.price.message}</h5>
        )}

        <Controller
          name="stock"
          control={control}
          //need to add validation for numeric values
          render={({ field }) => (
            <FormInput
              label="Stock"
              type="text"
              required
              onChange={field.onChange}
              name="stock"
              value={field.value}
            />
          )}
        />
        {errors.stock && (
          <h5 style={{ color: "red" }}>{errors.stock.message}</h5>
        )}

        <ButtonsContainer>
          <Button type="submit">Add Book</Button>
        </ButtonsContainer>
      </form>
      <ToastContainer />
    </AddBookContainer>
  );
};

export default AddBookForm;
