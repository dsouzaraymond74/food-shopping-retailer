const Inquiry = () => {
	return (
		<form
			id="contact-me"
			class="w-full mx-auto max-w-3xl bg-white shadow p-4 text-gray-700"
		>
			<h2 class="w-full my-2 text-3xl font-bold leading-tight my-2">
				Product Inquiry
			</h2>
			<div class="flex flex-wrap mb-4">
				<div class="relative w-full appearance-none label-floating">
					<input
						class="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
						id="name"
						type="text"
						placeholder="Your name"
						required
					/>
					<label
						for="name"
						class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
					>
						Your name
					</label>
				</div>
			</div>
			<div class="flex flex-wrap mb-4">
				<div class="relative w-full appearance-none label-floating">
					<input
						class="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
						id="name"
						type="text"
						placeholder="Your email"
						required
					/>
					<label
						for="name"
						class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
					>
						Your email
					</label>
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-4">
				<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						class="block uppercase w-full tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Product Name
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="Soup"
					/>
				</div>
				<div class="w-full md:w-1/2 px-3">
					<label
						class="block uppercase  w-full tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-last-name"
					>
						Quantity
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-last-name"
						type="number"
						placeholder="0"
					/>
				</div>
			</div>
			<div class="flex flex-wrap mb-4">
				<div class="relative w-full appearance-none label-floating">
					<textarea
						class="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
						id="message"
						type="text"
						placeholder="Optional Message..."
					></textarea>
				</div>
			</div>

			<button
				class="w-full shadow bg-teal hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
				type="submit"
			>
				Send
			</button>
		</form>
	);
};

export default Inquiry;
