const colorSelect = $("#color");
const dateSelect = $("#date");
const task = $("#task");
const newTaskBtn = $("#form button");
const taskListElement = $("#tasks-list");
const completedTasksInfo = $("#tasks-done-count");
const allTasks = [];
const completedTasks = [];
let todayDate = new Date();

updatingShowedNumberOfTasks();
correctingDateForInput()
$(dateSelect).val(todayDate);

$(document).ready(() => {
    newTaskBtn.on("click", (e) => {
        e.preventDefault();
        newTaskBtn.addClass("animating");

        $(window).on("animationend", () => {
            newTaskBtn.removeClass("animating")
        });

        if (verifyTask()) {
            $("#task-error-message").hide(400);

            const taskEntered = getTaskData();

            taskListElement.append(
                createListElementWithTask(taskEntered)
            );

            const list = $(`#task-${taskEntered.id}`);
            list.css("backgroundColor", `${taskEntered.color}55`)

            updatingShowedNumberOfTasks();

            $(`#task-${taskEntered.id}`).on(
                "click",
                handleListClick)
        } else {
            $("#task-error-message").show(400);
        }

        cleanInputsValues();
    });

    $("footer button").on("click", () => {
        $("#know-more").css("display", "block");

        $("#know-more").animate({
            opacity: 1,
            right: 0
        }, 500)
    })

    $(".back-option").on("click", () => {
        $("#know-more").animate({
            opacity: 0,
            right: "-200px"
        }, 400, () => {
            $("#know-more").css("display", "none");
        })
    })
})

function cleanInputsValues() {
    $(dateSelect).val(todayDate);
    $(task).val("");
}

function handleListClick(e) {
    $(e.currentTarget.children).each((id, element) => {
        if (id > 0) {
            $(element).css({
                "text-decoration": "line-through",
                "text-decoration-thickness": "4px"
            });
        }
    });

    const currentId = +$(e.currentTarget).attr("id").slice(5);

    if (completedTasks.every(task => task.id !== currentId)) {
        completedTasks.push(allTasks.filter(task => task.id === currentId)[0]);
        updatingShowedNumberOfTasks()
    }
}

function updatingShowedNumberOfTasks() {
    completedTasksInfo.text(
        `Concluídas: ${completedTasks.length} / ${allTasks.length}`
    )
}

function createListElementWithTask(task) {
    allTasks.push(task);
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

function correctingDateForInput() {
    let dayAsNumber = todayDate.getUTCDate();
    let month = todayDate.getUTCMonth() + 1;
    const year = todayDate.getUTCFullYear();

    dayAsNumber = [dayAsNumber < 10 ? "0" : "", dayAsNumber].join("");
    month = [month < 10 ? "0" : "", month].join("");
    todayDate = [year, month, dayAsNumber].join("-");
}

function verifyTask() {
    if (task.val()) {
        return true
    }
    return false
}