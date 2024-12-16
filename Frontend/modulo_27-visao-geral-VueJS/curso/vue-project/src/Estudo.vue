<script setup lang="ts">
import { reactive } from "vue"

const name: string = "Fabio Santos"

const myObj: { name: string; favoriteMovie: string } = {
	name: "Eloy",
	favoriteMovie: "Matrix",
}

const greeting = (name: string): string => {
	return `Hy, ${name}!`
}

const image1Url: string = "https://th.bing.com/th/id/OIP.-yjYJuvQCz14d59DTe6XyQHaFj?w=3264&h=2448&rs=1&pid=ImgDetMain"
const image2Url: string = "https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg"

const isButtonDisabled: boolean = true
const isFigure1: boolean = false
const isFigure2: boolean = true

// let count: number = 0
type Task = {
	id: number
	task: string
}

type State = {
	count: number
	email: string
	balance: number
	transferredValue: number
	tasksList: Task[]
}
const state: State = reactive({
	count: 0,
	email: "",
	balance: 5e3,
	transferredValue: 0,
	tasksList: [
		{ id: 1, task: "take out thrash" },
		{ id: 2, task: "do the dishes" },
		{ id: 3, task: "sweep floor" },
		{ id: 4, task: "after sweep floor, wash it" },
		{ id: 5, task: "clean office table" },
	],
})

function handlePlus(): void {
	state.count++
}

function handleMinus(): void {
	state.count--
}

function handleChangeEmail(e: Event): void {
	const target = e.target as HTMLInputElement
	state.email = target.value
}

function showNewBalance(): number {
	const { balance, transferredValue } = state
	return balance - transferredValue
}

function handleTransferring(e: Event): void {
	const target = e.target as HTMLInputElement
	state.transferredValue = target.valueAsNumber
}

function verifyingTransferValue(): boolean {
	const { balance, transferredValue } = state
	return balance >= transferredValue
}

function handleAddingATask(event: Event): void {
	event.preventDefault()
	const target = event.target as HTMLFormElement
	const formElements = target.elements as HTMLFormControlsCollection & { task: HTMLInputElement }
	const task: string = formElements.task.value
	const newTask: Task = {
		id: state.tasksList.length + 1,
		task: task,
	}
	state.tasksList.push(newTask)
	formElements.task.value = ""
}
</script>

<template>
	<h1>{{ greeting(name) }}</h1>
	<h2>The favorite movie of {{ myObj.name }} is {{ myObj.favoriteMovie }}</h2>
	<img
		v-if="isFigure1"
		class="image"
		:src="image1Url" />
	<img
		v-else-if="isFigure2"
		class="image"
		:src="image2Url" />
	<h2 v-else>You do not like nature images</h2>
	<button :disabled="isButtonDisabled">Send Message!</button>
	<br />
	<br />
	<hr />

	<div class="counter">
		<h2 class="counter__text">{{ state.count }}</h2>
		<button
			class="counter__btn"
			type="button"
			@click="handlePlus">
			+
		</button>
		<button
			class="counter__btn"
			type="button"
			@click="handleMinus">
			-
		</button>
	</div>

	<br />
	<br />
	<hr />

	<div class="email">
		<h2 class="email__text">{{ state.email }}</h2>
		<input
			class="email__input"
			type="email"
			value=""
			placeholder="Type your email..."
			@keyup="handleChangeEmail" />
	</div>

	<br />
	<br />
	<hr />

	<div class="balance">
		<h2 class="balance__info">Balance: {{ state.balance }}</h2>
		<h2 class="balance__info">Transferring: {{ state.transferredValue }}</h2>
		<h2 class="balance__info">New balance: {{ showNewBalance() }}</h2>
		<input
			:class="{ 'balance__input--isInvalid': !verifyingTransferValue() }"
			class="balance__input"
			type="number"
			name=""
			id=""
			placeholder="Value to transfer..."
			@keyup="handleTransferring" />
	</div>

	<br />
	<br />
	<hr />

	<div class="task">
		<form
			@submit="handleAddingATask"
			class="task__form">
			<div class="task__input">
				<label
					class="task__input__label"
					for="task">
					Enter a new task:</label
				>
				<input
					class="task__input__field"
					id="task"
					type="text"
					name="task"
					value=""
					placeholder="New Task..." />
			</div>
			<button class="task__btn">Add new task</button>
		</form>

		<ul class="task__list">
			<li
				class="task__list__item"
				v-for="nameObj in state.tasksList"
				:key="nameObj.id">
				{{ [nameObj.task.slice(0, 1).toUpperCase(), nameObj.task.slice(1)].join("") }}
			</li>
		</ul>
	</div>

	<footer style="margin-bottom: 45vh"></footer>
</template>

<style scoped lang="sass">
@use "sass:color"

.image
    margin: 16px 0
    max-width: 350px
    width: 100%
    display: block

.counter
    width: 60%
    margin: 0 auto
    display: flex
    justify-content: space-evenly
    align-items: center
    &__text
        width: 20%
        padding: 12px 12px
        text-align: center
        border: 1px solid black
        border-radius: 8px
    &__btn
        width: 15%
        font-size: 24px
        font-weight: 500
        &:hover
            cursor: pointer

.email
    width: 60%
    margin: 20px auto
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    &__text
        width: 60%
        height: 50px
        display: flex
        align-items: center
        justify-content: center
        border: 1px solid black
        border-radius: 8px
        font-size: 20px
    &__input
        width: 60%
        padding: 12px 12px
        font-size: 18px

.balance
    width: 60%
    margin: 20px auto
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: center
    &__info
        width: 45%
        text-align: center
        border: 1px solid #0003
        background-color: #1611
        padding: 20px
    &__input
        text-align: center
        width: 45%
        padding: 20px 8px
        font-weight: 500
        color: #0008
        font-size: 1.8em
        outline-color: #00f6
        border: 1px solid #00f6
        &--isInvalid
            outline-color: #f136
            border: 1px solid #f136
        &::-webkit-inner-spin-button, &::-webkit-inner-spin-button
            -webkit-appearance: none
            margin: 0

// <!-- .task [&__input [&__label, &__field], &__list [&__item]] -->
.task
    &::before
        width: 20%
        padding-left: 6px
        padding-bottom: 2px
        content: "Tasks List"
        margin-bottom: 16px
        font-size: 1.7em
        font-weight: 600
        border-left: 1px solid #000
        border-bottom: 1px solid #000
    padding: 20px
    width: 60%
    margin: 20px auto
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: flex-start
    border: 1px solid #000

    &__form
        width: 100%
    &__input
        margin: 24px 0
        width: 100%
        display: flex
        align-items: center
        &__label
            margin-right: 16px
            font-size: 1.4em
        &__field
            width: 70%
            padding: 8px 12px
            font-size: 1.3em
            color: #666

    &__btn
        width: 28%
        padding: 12px 8px
        margin-bottom: 32px
        font-size: 1.4em
        border: none
        background-color: hsl(120, 80%, 92%)
        border-radius: 16px
        position: relative
        left: 50%
        transform: translate(56%)
        &:hover
            cursor: pointer
            background-color: color.adjust(hsl(120, 80%, 92%), $lightness:-10%)

    &__list
        width: 100%
        display: flex
        flex-direction: column
        align-items: center
        gap: 22px
        font-size: 1.6em
        list-style: none
        padding-left: 0
        &__item
            padding-left: 36px
            width: 80%
            border-right: 2px solid #888
            border-bottom: 2px dashed #888
</style>
