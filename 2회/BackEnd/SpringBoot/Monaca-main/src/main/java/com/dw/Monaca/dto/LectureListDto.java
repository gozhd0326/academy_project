package com.dw.Monaca.dto;

import jakarta.validation.constraints.NotNull;

public class LectureListDto {

private Long id;
	
	// 강의 카테고리
	@NotNull
	private String lectureCategory;
	
	// 강의 제목
	@NotNull
	private String lectureName;
	
	// 강의 상세 설명 (부제목)
	private String lectureDescription;
	
	// 과목 담당 교수
	private String professor;
			
	// 강의 메인 이미지
	@NotNull
	private String image;

	public LectureListDto() {
		super();
	}

	public LectureListDto(Long id, @NotNull String lectureCategory, @NotNull String lectureName,
			String lectureDescription, String professor, @NotNull String image) {
		super();
		this.id = id;
		this.lectureCategory = lectureCategory;
		this.lectureName = lectureName;
		this.lectureDescription = lectureDescription;
		this.professor = professor;
		this.image = image;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLectureCategory() {
		return lectureCategory;
	}

	public void setLectureCategory(String lectureCategory) {
		this.lectureCategory = lectureCategory;
	}

	public String getLectureName() {
		return lectureName;
	}

	public void setLectureName(String lectureName) {
		this.lectureName = lectureName;
	}

	public String getLectureDescription() {
		return lectureDescription;
	}

	public void setLectureDescription(String lectureDescription) {
		this.lectureDescription = lectureDescription;
	}

	public String getProfessor() {
		return professor;
	}

	public void setProfessor(String professor) {
		this.professor = professor;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	
}
