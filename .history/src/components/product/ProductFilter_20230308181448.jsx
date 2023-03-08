export default function ProductFilter() {
  return (
    <>
      개요 변경된 파일들을 확인하고 스테이지에 올리기 위해서는 git add라는
      명령어를 사용하게 됩니다. 그리고 스테이지에 올리기 전에 변경된 파일과
      코드들을 확인해 보기 위해서는 git status (변경된 파일 상태보기), git diff
      (스테이지에 올라가지 않은 파일들의 변경사항 보기) 명령어로 판단 할
      수있습니다. 하지만 여러 파일을 수정하고 스테이지에 올리는 경우, 커밋
      의도에 맞는 변경 사항이 적용 됐는지 일일이 확인하는 것은 상당히 귀찮은
      일이고, 스테이지에 올리지 않게 수정하거나, 스테이지에 올라갈 파일들만
      골라내는 작업도 시간을 많이 소모하게 됩니다. 이러한 문제는 git add를
      사용하지 않고 git add -p라는 명령어를 사용하면 쉽게 해결 할 수 있습니다.
      git add -p git add -p 를 사용하게 되면, 현재 변경된 코드들의 파일들을
      하나씩 보여주고, 해당 파일을 스테이지에 올릴 것인지, 올리지 않을 것인지
      바로 선택 할 수 있습니다. 한마디로 위에서 설명한 git status / git diff /
      git add (혹은 git checkout -- 파일명) 을 한번에 진행 하는 것입니다. 예를
      들어 현재 저의 알고리즘 폴더의 버젼 관리 사항은 아래와 같습니다. (git
      status 명령어) 3개의 파일들이 변경되어 스테이지에 등록 될 수 있는 상태에
      있습니다. 만약 특정 파일만 스테이지에 올리고 싶다면 하나씩 변경 사항을
      확인하고 스테이지에 올리는 과정을 진행 해야 하지만, git add -p 명령어를
      입력하면 아래와 같이 실행됩니다. 각 파일의 변경사항을 바로 확인 하고
      스테이지에 올릴지 결정 할 수 있습니다. 가장 아래 보면 Stage this hunk
      [y,n,q,a,d,s,e,?]? 라는 명령어가 있는데 기본적인 것은 y,n,q만 알고 있어도
      가능합니다. (hunk는 스테이지에 올라 갈 수 있는 하나의 단위를 말합니다.)
      y는 해당 hunk를 스테이지에 올리고, n은 해당 hunk를 스테이지에 올리지 않고,
      q는 종료합니다. 명령어 모음 y - stage this hunk n - do not stage this hunk
      q - quit; do not stage this hunk or any of the remaining ones a - stage
      this hunk and all later hunks in the file d - do not stage this hunk or
      any of the later hunks in the file g - select a hunk to go to / - search
      for a hunk matching the given regex j - leave this hunk undecided, see
      next undecided hunk J - leave this hunk undecided, see next hunk k - leave
      this hunk undecided, see previous undecided hunk K - leave this hunk
      undecided, see previous hunk s - split the current hunk into smaller hunks
      e - manually edit the current hunk ? - print help 참고 주소 -
      https://git-scm.com/docs/git-add
    </>
  );
}
