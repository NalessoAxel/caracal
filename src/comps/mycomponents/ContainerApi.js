import { Input, InputGroup, Checkbox, Text } from '@chakra-ui/react';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import ModalData from './ModalData';

const ContainerApi = () => {
	const [apiData, setApiData] = useState(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		fetch('http://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then(setApiData);
	};

	return (
		<>
			<ModalData onClose={() => setApiData(null)} isOpen={apiData != null}>
				{JSON.stringify(apiData)}
			</ModalData>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Checkbox mb="22px" {...register('checkbox', { required: true })}>
					<Text>
						I accept all <b>terms and conditions</b>
					</Text>
				</Checkbox>
				{errors.checkbox && <Text color="red">You must accept terms and conditions</Text>}
				<InputGroup w="400px">
					<Input
						w="228px"
						h="55px"
						type="text"
						placeholder="Votre adresse email"
						outline="none"
						name="email"
						{...register('email', {
							required: true,
							pattern: {
								value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							},
						})}
					/>

					<Input w="170px" h="55px" bg="white" color="#3656BF" type="submit" value="Subscribe" />
				</InputGroup>
				{errors.email && <Text color="red">Email is required</Text>}
			</form>
		</>
	);
};

export default ContainerApi;
