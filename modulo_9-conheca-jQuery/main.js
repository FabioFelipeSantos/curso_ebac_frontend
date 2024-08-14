const colorSelect = $("#color");
const dateSelect = $("#date");
const task = $("#task");
const newTaskBtn = $("#form button");
const taskListElement = $("#tasks-list");
const allTasks = [];
const completedTasks = [];

dateSelect.on("change", () => console.log(dateSelect, dateSelect.val()))

$(document).ready(() => {
    newTaskBtn.on("click", (e) => {
        e.preventDefault();
        newTaskBtn.addClass("animating");

        $(window).on("animationend", () => {
            newTaskBtn.removeClass("animating")
        });

        if (verifyTask()) {
            $("#task-error-message").hide(400);

            taskListElement.append(
                createListElementWithTask(getTaskData())
            );

            allTasks.push();

        } else {
            $("#task-error-message").show(400);
        }
    })
})

function createListElementWithTask(task) {
    if (task.date) {
        return `
        <li id="task-${task.id}">
            <input type="checkbox" class="task-done" />
            <time datetime="${task.date[3]}-${task.date[2]}-${task.date[1]}">${task.date[0]}</time>
            <span>${task.taskInfo}</span>
        </li>
        `
    } else {
        return `
        <li id="task-${task.id}">
            <input type="checkbox" class="task-done" />
            <span class="no-date">${task.taskInfo}</span>
        </li>
        `
    }
}

function getTaskData() {
    return {
        id: allTasks.length + 1,
        taskInfo: task.val(),
        date: settingBRDateFormat(),
        color: colorSelect.val() || "#5e85475a"
    }
}

function settingBRDateFormat() {
    const dateFromInput = dateSelect[0].valueAsDate;

    if (dateFromInput) {
        let dayAsNumber = dateFromInput.getUTCDate();
        let month = dateFromInput.getUTCMonth() + 1;
        const year = dateFromInput.getUTCFullYear();

        dayAsNumber = [dayAsNumber < 10 ? "0" : "", dayAsNumber].join("");
        month = [month < 10 ? "0" : "", month].join("");

        return [[dayAsNumber, month, year].join("/"),
            dayAsNumber, month, year];
    }

    return null;
}

function verifyTask() {
    if (task.val()) {
        return true
    }
    return false
}