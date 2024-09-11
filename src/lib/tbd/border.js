import { createShader, createProgram } from './utils';
import { borderVertexShader, borderFragmentShader } from './shaders';

export const createBorder = (renderer) => {
	const { gl } = renderer;

	const vertexShader = createShader(gl, gl.VERTEX_SHADER, borderVertexShader);
	const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, borderFragmentShader);
	const program = createProgram(gl, vertexShader, fragmentShader);

	const border = {
		program,
		resolutionUniformLocation: gl.getUniformLocation(program, 'u_resolution'),
		colorUniformLocation: gl.getUniformLocation(program, 'u_color'),
		positionUniformLocation: gl.getUniformLocation(program, 'u_position'),
		sizeUniformLocation: gl.getUniformLocation(program, 'u_size'),
		vao: null
	};

	border.vao = gl.createVertexArray();
	gl.bindVertexArray(border.vao);

	const positionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
	gl.bufferData(
		gl.ARRAY_BUFFER,
		new Float32Array([-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5]),
		gl.STATIC_DRAW
	);

	const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
	gl.enableVertexAttribArray(positionAttributeLocation);
	gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

	gl.bindVertexArray(null);

	return border;
};

export const renderBorder = (renderer, border, x, y, width, height) => {
	const { gl } = renderer;

	gl.useProgram(border.program);
	gl.bindVertexArray(border.vao);

	gl.uniform2f(border.resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
	gl.uniform4fv(border.colorUniformLocation, [1, 0.8, 0, 1]);
	gl.uniform2f(border.positionUniformLocation, x, y);
	gl.uniform2f(border.sizeUniformLocation, width + 4, height + 4); // Slightly larger than the image

	gl.drawArrays(gl.LINE_LOOP, 0, 4);

	gl.bindVertexArray(null);
};
