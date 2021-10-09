'use  strict';

// { name: タスクの文字列, state: 完了しているかどうかの真偽値 }
const tasks = [];

/**
 * TODOを追加する
 * @param {string} task 
 */
function add(task) {
    tasks.push({name: task, state: false});
}

/**
 * タスクと完了したかどうかが含まれるオブジェクトを受け取り、完了したかを返す
 * @param {object} taskAndIsDonePair 
 * @returns {boolean} 完了したかどうか
 */
function isDone(taskAndIsDonePair) {
    return taskAndIsDonePair.state;
}

/**
 * タスクと完了したかどうかを含まれるオブジェクトを受け取り、完了していないかを返す
 * @param {object} taskAndIsDonePair 
 * @returns {boolean} 完了していないかどうか
 */
function isNotDone(taskAndIsDonePair){
    return !isDone(taskAndIsDonePair);
}

/**
 * TODOの一覧の配列を取得する
 * @returns {array}
 */
function list() {
    return tasks.filter(isNotDone).map(t => t.name);
}

/**
 * TODOを完了状態にする
 * @param {string} task 
 */
function done(task) {
    const indexFound = tasks.findIndex(t => t.name === task);
    if (indexFound !== -1) {
        tasks[indexFound].state = true;
    }
}

/**
 * 完了済みのタスクの一覧の配列を取得する
 * @returns {array}
 */
function donelist() {
    return tasks.filter(isDone).map(t => t.name);
}

/**
 * 項目を削除する
 * @param {string} task 
 */
function del(task) {
    const indexFound = tasks.findIndex(t => t.name === task);
    if (indexFound !== -1) {
        tasks.splice(indexFound, 1);
    }
}

// パッケージとして外部に公開する
module.exports = { add, list, done, donelist, del };