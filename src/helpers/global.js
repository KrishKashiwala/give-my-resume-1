export const handleRemoveFields = (inputFields, setInputFields, id) => {
	const values = [...inputFields];
	values.splice(values.findIndex(value => value.id === id), 1);
	setInputFields(values);
}