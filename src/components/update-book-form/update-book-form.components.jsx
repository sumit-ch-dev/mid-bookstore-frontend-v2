import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const UpdateBookForm = ({ book, onSubmit }) => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            title: book.title,
            author: book.author,
            description: book.description,
            price: book.price,
        },
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="title">Title:</label>
                <Controller
                    name="title"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <input {...field} />}
                />
            </div>
            <div>
                <label htmlFor="author">Author:</label>
                <Controller
                    name="author"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <input {...field} />}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <Controller
                    name="description"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <textarea {...field} />}
                />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <Controller
                    name="price"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <input type="number" {...field} />}
                />
            </div>
            <button type="submit">Update Book</button>
        </form>
    );
};

export default UpdateBookForm;
