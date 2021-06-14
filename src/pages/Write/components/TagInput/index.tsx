import { useField } from '@unform/core';
import React, { useCallback, useEffect, useState } from 'react';
import { FaExclamationTriangle, FaPlus, FaTimesCircle } from 'react-icons/fa';

import { uid } from '../../../../utils/uid';
import { AddButton, Container, Tag } from './styles';

interface ITag {
  id: string;
  tag: string;
  editable: boolean;
}

interface ITagInputProps {
  onChange?: () => void;
  name: string;
}

const TagInput: React.FC<ITagInputProps> = ({ name }) => {
  const [tags, setTags] = useState<ITag[]>([]);
  const [currentTagFocus, setCurrentTagFocus] = useState('');

  const { registerField, fieldName, error, clearError } = useField(name);

  const updateTag = useCallback(
    (tagId: string, tag: Partial<ITag>) => {
      const tagIndex = tags.findIndex(({ id }) => id === tagId);

      const updatedTags = tags;
      updatedTags[tagIndex] = {
        ...updatedTags[tagIndex],
        ...tag,
      };

      setTags([...updatedTags]);
    },
    [tags],
  );

  const handleRemoveTag = useCallback(
    (tagId: string) => {
      const tagIndex = tags.findIndex(({ id }) => id === tagId);

      const updatedTags = tags;
      updatedTags.splice(tagIndex, 1);

      setTags([...updatedTags]);
    },
    [tags],
  );

  const handleTagInputChange = useCallback(
    (e: React.ChangeEvent) => {
      const target = e.target as HTMLInputElement;

      updateTag(target.id, {
        tag: target.value,
      });
    },
    [updateTag],
  );

  const handleTagInputKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const target = e.target as HTMLInputElement;

      const keyCodesToListen = ['Enter', 'Tab'];

      if (keyCodesToListen.includes(e.code) && target.value === '')
        handleRemoveTag(target.id);
    },
    [handleRemoveTag],
  );

  const handleTagInputBlur = useCallback(
    (e: React.FocusEvent) => {
      const target = e.target as HTMLInputElement;

      if (target.value === '') handleRemoveTag(target.id);
    },
    [handleRemoveTag],
  );

  const handleAddTag = useCallback(() => {
    const tagId = uid();

    if (error) clearError();

    setCurrentTagFocus(tagId);

    setTags(state => [
      ...state,
      {
        id: tagId,
        tag: '',
        editable: true,
      },
    ]);
  }, [setCurrentTagFocus, clearError, error]);

  useEffect(() => {
    if (currentTagFocus !== '') {
      const tag = document.querySelector(
        `#${currentTagFocus}`,
      ) as HTMLInputElement;

      if (tag) {
        tag.focus();
      }
    }
  }, [currentTagFocus]);

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => tags.map(tag => tag.tag),
    });
  }, [registerField, fieldName, tags]);

  return (
    <Container>
      {tags.map(({ id, tag }) => (
        <Tag key={id}>
          <input
            id={id}
            type="text"
            style={{
              width: `${(tag.length > 3 ? tag.length : 3) + 1}ch`,
            }}
            value={tag}
            placeholder="tag"
            onChange={handleTagInputChange}
            onKeyDown={handleTagInputKeyDown}
            onBlur={handleTagInputBlur}
          />

          <button type="button" onClick={() => handleRemoveTag(id)}>
            <FaTimesCircle />
          </button>
        </Tag>
      ))}

      {!!error && <FaExclamationTriangle />}
      {!!error && <span className="error">{error}</span>}

      <AddButton type="button" onClick={() => handleAddTag()}>
        <FaPlus />
      </AddButton>
    </Container>
  );
};

export { TagInput };
