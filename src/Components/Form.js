import React from "react";

const Form = (props) => {
    const { change, submit, errors } = props;
    const { username, email, password, tos } = props.values;

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    return (
        <div>
            <h1> My form </h1>
            <p>{errors.username}</p>
            <p>{errors.email}</p>
            <p>{errors.password}</p>
            <p>{errors.tos}</p>
            <form onSubmit={onSubmit} />
            <form>
                <label>Name:
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChane={onChange}
                    />
                </label>
                <label>Email:
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChane={onChange}
                    />
                </label>
                <label>Password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChane={onChange}
                    />
                </label>
                <label>Terms of Service:
                    <input
                        type="checkbox"
                        name="tos"
                        checked={tos}
                        onChange={onChange}
                    />
                </label>
                <input type="submit" value="Create a Friend"/>
            </form>
        </div>
    )
}

export default Form;