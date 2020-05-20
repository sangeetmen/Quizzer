/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.curious.model;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;
import java.util.Set;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 *
 * @author Sangeet
 */
@Entity
@Table(name = "questions")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Questions.findAll", query = "SELECT q FROM Questions q")
    , @NamedQuery(name = "Questions.findById", query = "SELECT q FROM Questions q WHERE q.id = :id")
    , @NamedQuery(name = "Questions.findByQuestion", query = "SELECT q FROM Questions q WHERE q.question = :question")
    , @NamedQuery(name = "Questions.findByAnswered", query = "SELECT q FROM Questions q WHERE q.answered = :answered")
    , @NamedQuery(name = "Questions.findByDisplay", query = "SELECT q FROM Questions q WHERE q.display = :display")
    , @NamedQuery(name = "Questions.findByQuestiontype", query = "SELECT q FROM Questions q WHERE q.questiontype = :questiontype")
    , @NamedQuery(name = "Questions.findByQuestioncategory", query = "SELECT q FROM Questions q WHERE q.questioncategory = :questioncategory")
    , @NamedQuery(name = "Questions.findByQuestionno", query = "SELECT q FROM Questions q WHERE q.questionno = :questionno")
    , @NamedQuery(name = "Questions.findByQuestionpoints", query = "SELECT q FROM Questions q WHERE q.questionpoints = :questionpoints")})
public class Questions implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Column(name = "question")
    private String question;
    @Column(name = "answered")
    private String answered;
    @Column(name = "display")
    private String display;
    @Column(name = "questiontype")
    private String questiontype;
    @Column(name = "questioncategory")
    private Integer questioncategory;
    @Column(name = "questionno")
    private Integer questionno;
    @Column(name = "questionpoints")
    private Integer questionpoints;
    @Column(name="questionfile")
    private String questionfile;
    @JoinColumn(name = "gameid", referencedColumnName = "id")
    @ManyToOne
    @JsonIgnore
    private Game gameid;
    @OneToMany(cascade=CascadeType.ALL)
    @JoinColumn(name="questionid")
    private List<Choices> choices;
    

    

	public Questions() {
    }

    public Questions(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswered() {
        return answered;
    }

    public void setAnswered(String answered) {
        this.answered = answered;
    }

    public String getDisplay() {
        return display;
    }

    public void setDisplay(String display) {
        this.display = display;
    }

    public String getQuestiontype() {
        return questiontype;
    }

    public void setQuestiontype(String questiontype) {
        this.questiontype = questiontype;
    }

    public Integer getQuestioncategory() {
        return questioncategory;
    }

    public void setQuestioncategory(Integer questioncategory) {
        this.questioncategory = questioncategory;
    }

    public Integer getQuestionno() {
        return questionno;
    }

    public void setQuestionno(Integer questionno) {
        this.questionno = questionno;
    }

    public Integer getQuestionpoints() {
        return questionpoints;
    }

    public void setQuestionpoints(Integer questionpoints) {
        this.questionpoints = questionpoints;
    }

    public String getQuestionfile() {
		return questionfile;
	}

	public void setQuestionfile(String questionfile) {
		this.questionfile = questionfile;
	}

	public Game getGameid() {
        return gameid;
    }

    public void setGameid(Game gameid) {
        this.gameid = gameid;
    }
    
    
    public List<Choices> getChoices() {
		return choices;
	}

	public void setChoicesCollection(List<Choices> choices) {
		this.choices = choices;
	}

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Questions)) {
            return false;
        }
        Questions other = (Questions) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.curious.model.Questions[ id=" + id + " ]";
    }
    
}
