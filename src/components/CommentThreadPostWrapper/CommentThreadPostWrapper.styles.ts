import styled, { css } from 'styled-components'

export const Container = styled.article<{ level: number }>`
  width: 100%;
  padding-top: 4px;
  padding-left: 16px;
  position: relative;

  display: flex;
  flex-direction: row;
  gap: 8px;

  .right {
    max-width: calc(100% - 26px);
  }

  /* Comment level 2 */
  ${props => props.level === 2 && css`
    padding-left: 54px;
  `}

  /* Comment level 3 */
  ${props => props.level === 3 && css`
    padding-left: 92px;
  `}
`

export const ThreadMain = styled.div<{ level: number }>`
  background-color: var(--comment-background);
  display: block;
  width: 2px;
  height: 100%;

  position: absolute;
  left: 30px;
`

export const ThreadSubMain = styled.div<{ level: number }>`
  background-color: var(--comment-background);
  display: block;
  width: 2px;
  height: 100%;

  position: absolute;
  left: 71px;
`

export const ThreadLeft = styled.div<{ level: number }>`
  display: block;
  width: 24px;
  height: 20px;

  border-bottom-left-radius: 10px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-top-color: var(--comment-background);
  border-right-color: var(--comment-background);
  border-left-style: solid;
  border-left-color: var(--comment-background);
  border-bottom-color: var(--comment-background);
  border-left-width: 2px;

  position: absolute;

  /* Comment level 2 */
  ${props => props.level === 2 && css`
    left: 30px;
  `}

  /* Comment level 3 */
  ${props => props.level === 3 && css`
    left: 71px;
  `}
`

export const ThreadBottom = styled.div<{ level: number }>`
  display: block;
  width: 2px;
  height: 100%;
  background-color: var(--comment-background);

  position: absolute;
  top: 43px;

  /* Comment level 1 */
  ${props => props.level === 1 && css`
    left: 30px;
  `}

  /* Comment level 2 */
  ${props => props.level === 2 && css`
    left: 71px;
  `}
`

export const Child = styled.div`
  padding-left: 6px;
  margin-top: 8px;
`