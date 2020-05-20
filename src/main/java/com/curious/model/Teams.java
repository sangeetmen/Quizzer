/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.curious.model;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
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
@Table(name = "teams")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Teams.findAll", query = "SELECT t FROM Teams t")
    , @NamedQuery(name = "Teams.findById", query = "SELECT t FROM Teams t WHERE t.id = :id")
    , @NamedQuery(name = "Teams.findByTeamname", query = "SELECT t FROM Teams t WHERE t.teamname = :teamname")
    , @NamedQuery(name = "Teams.findByPoints", query = "SELECT t FROM Teams t WHERE t.points = :points")
    , @NamedQuery(name = "Teams.findByPostion", query = "SELECT t FROM Teams t WHERE t.postion = :postion")
    , @NamedQuery(name = "Teams.findByDisplay", query = "SELECT t FROM Teams t WHERE t.display = :display")})
public class Teams implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Column(name = "teamname")
    private String teamname;
    @Column(name = "points")
    private Integer points;
    @Column(name = "postion")
    private Integer postion;
    @Column(name = "display")
    private String display;
    @Column(name = "teamcode")
    private String teamcode;
    @JoinColumn(name = "gameid", referencedColumnName = "id")
    @ManyToOne
    @JsonIgnore
    private Game gameid;
    @OneToMany(mappedBy = "teamid")
    private Collection<Pointslog> pointslogCollection;

    public Teams() {
    }

    public Teams(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTeamname() {
        return teamname;
    }

    public void setTeamname(String teamname) {
        this.teamname = teamname;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    public Integer getPostion() {
        return postion;
    }

    public void setPostion(Integer postion) {
        this.postion = postion;
    }

    public String getDisplay() {
        return display;
    }

    public void setDisplay(String display) {
        this.display = display;
    }

    public Game getGameid() {
        return gameid;
    }

    public void setGameid(Game gameid) {
        this.gameid = gameid;
    }

    public String getTeamcode() {
		return teamcode;
	}

	public void setTeamcode(String teamcode) {
		this.teamcode = teamcode;
	}

	@XmlTransient
    public Collection<Pointslog> getPointslogCollection() {
        return pointslogCollection;
    }

    public void setPointslogCollection(Collection<Pointslog> pointslogCollection) {
        this.pointslogCollection = pointslogCollection;
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
        if (!(object instanceof Teams)) {
            return false;
        }
        Teams other = (Teams) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.curious.model.Teams[ id=" + id + " ]";
    }
    
}
