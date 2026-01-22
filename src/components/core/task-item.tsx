import React, { useState } from "react";
import { ButtonIcon } from "../ui/buttonIcon";
import { Card } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Text } from "../ui/text";
import CheckIcon from "../../assets/icons/check.svg?react";
import PencilIcon from "../../assets/icons/pencil.svg?react";
import TrashIcon from "../../assets/icons/trash.svg?react";
import XIcon from "../../assets/icons/x.svg?react";
import { Input } from "../ui/input";
import { TaskState, type Task } from "../../models/task";
import { cx } from "class-variance-authority";
import { useTask } from "../../hooks/use-task";
import { Skeleton } from "../ui/skeleton";

interface TaskItemProps {
  task: Task;
  loading?: boolean;
}

export function TaskItem({ task, loading }: TaskItemProps) {
  const { updateTasks, updateTasksStatus, deleteTask } = useTask();

  const [isEditing, setIsEditing] = useState(task.state === TaskState.Creating);
  const [taskTitle, setTaskTitle] = useState(task?.title || "");

  const handleEditTask = () => {
    setIsEditing(true);
  };

  const handleExitEditMode = () => {
    if (task.state === TaskState.Creating) {
      deleteTask(task.id);
    }

    setIsEditing(false);
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const handleSaveTask = (e: React.FormEvent) => {
    e.preventDefault();
    updateTasks(task.id, { title: taskTitle });
    setIsEditing(false);
  };

  const handleToggleTaskStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    updateTasksStatus(task.id, checked);
  };

  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  return (
    <Card
      as={task.state === TaskState.Creating || isEditing ? "form" : "div"}
      onSubmit={handleSaveTask}
      size="md"
      className="flex items-center gap-4"
    >
      {isEditing ? (
        <>
          <Input
            className="flex-1"
            onChange={handleChangeTitle}
            required
            autoFocus
            value={taskTitle}
          />
          <div className="flex gap-1">
            <ButtonIcon
              icon={XIcon}
              variant="secondary"
              type="button"
              onClick={handleExitEditMode}
            />
            <ButtonIcon icon={CheckIcon} variant="primary" type="submit" />
          </div>
        </>
      ) : (
        <>
          <Checkbox
            checked={task.completed}
            onChange={handleToggleTaskStatus}
            loading={loading}
          />
          {!loading ? (
            <Text
              className={cx("flex-1", {
                "line-through text-gray-500": task.completed,
              })}
            >
              {task?.title}
            </Text>
          ) : (
            <Skeleton className="flex-1 h-6" />
          )}
          <div className="flex gap-1">
            <ButtonIcon
              icon={TrashIcon}
              variant="tertiary"
              type="button"
              onClick={handleDeleteTask}
              loading={loading}
            />
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
              type="button"
              loading={loading}
            />
          </div>
        </>
      )}
    </Card>
  );
}
