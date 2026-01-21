import { useState } from "react";
import { ButtonIcon } from "../ui/buttonIcon";
import { Card } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Text } from "../ui/text";
import CheckIcon from "../../assets/icons/check.svg?react";
import PencilIccon from "../../assets/icons/pencil.svg?react";
import TrashIcon from "../../assets/icons/trash.svg?react";
import XIcon from "../../assets/icons/x.svg?react";
import { Input } from "../ui/input";

export function TaskItem() {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <Card size="md" className="flex items-center gap-4">
      {isEditing ? (
        <>
          <Input className="flex-1" />
          <div className="flex gap-1">
            <ButtonIcon
              icon={XIcon}
              variant="secondary"
              onClick={handleToggleEdit}
            />
            <ButtonIcon icon={CheckIcon} variant="primary" />
          </div>
        </>
      ) : (
        <>
          <Checkbox />
          <Text className="flex-1">Tomar 3 litros de água</Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon
              icon={PencilIccon}
              variant="tertiary"
              onClick={handleToggleEdit}
            />
          </div>
        </>
      )}
    </Card>
  );
}
